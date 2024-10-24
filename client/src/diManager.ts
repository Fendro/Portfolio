import {
  FetchService,
  type IFetchService,
  IToastService,
  ToastService,
} from '@/core/services';
import {
  useLocalizationStore,
  usePreferenceStore,
  useReviewStore,
} from '@/core/stores';

export class DependencyManager {
  private readonly _fetchService: IFetchService = new FetchService();
  private _toastService: IToastService | undefined;

  get toastService() {
    if (!this._toastService) this._toastService = new ToastService();

    return this._toastService;
  }

  get localizationStore() {
    return useLocalizationStore();
  }

  get preferenceStore() {
    return usePreferenceStore();
  }

  get reviewStore() {
    return useReviewStore();
  }

  get fetchService() {
    return this._fetchService;
  }
}

export const diManager = new DependencyManager();
