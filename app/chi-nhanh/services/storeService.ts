import { CuaHang, StoreFetchOptions } from '../types';

export class StoreService {
  private static storesCache: CuaHang[] | null = null;
  private static isFetching = false;
  private static fetchPromise: Promise<CuaHang[]> | null = null;

  static async getStores(options?: StoreFetchOptions): Promise<CuaHang[]> {
    
    if (this.storesCache && (!options || !options.tinhThanh || options.tinhThanh === 'Tất cả')) {
      return this.applyFilters(this.storesCache, options);
    }
    if (this.isFetching && this.fetchPromise) {
      return this.fetchPromise.then(stores => this.applyFilters(stores, options));
    }
    this.isFetching = true;
    this.fetchPromise = this.fetchStores();
    
    try {
      const stores = await this.fetchPromise;
      this.storesCache = stores;
      return this.applyFilters(stores, options);
    } finally {
      this.isFetching = false;
      this.fetchPromise = null;
    }
  }

  private static async fetchStores(): Promise<CuaHang[]> {
    try {
      const response = await fetch('/api/chi-nhanh/stores');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching stores:', error);
    
      const localData = await import('../data/stores.json');
      return localData.default;
    }
  }

  private static applyFilters(stores: CuaHang[], options?: StoreFetchOptions): CuaHang[] {
    let filteredStores = [...stores];

    if (options?.tinhThanh && options.tinhThanh !== 'Tất cả') {
      filteredStores = filteredStores.filter(store => 
        store.tinhThanh === options.tinhThanh
      );
    }

    if (options?.offset !== undefined && options?.limit !== undefined) {
      const start = options.offset;
      const end = start + options.limit;
      filteredStores = filteredStores.slice(start, end);
    }

    return filteredStores;
  }

  static getProvinces(stores: CuaHang[]): string[] {
    const provinces = new Set(stores.map(store => store.tinhThanh));
    return ['Tất cả', ...Array.from(provinces)];
  }

  static getStoreCount(stores: CuaHang[]): number {
    return stores.length;
  }

  static clearCache(): void {
    this.storesCache = null;
  }
}