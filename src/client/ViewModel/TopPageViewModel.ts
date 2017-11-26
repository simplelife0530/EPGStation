import ViewModel from './ViewModel';
import { ReservesApiModelInterface } from '../Model/Api/ReservesApiModel';

/**
* TopPageViewModel
*/
class TopPageViewModel extends ViewModel {
    private reservesApiModel: ReservesApiModelInterface;
    private conflictsCount: number = 0;

    constructor(reservesApiModel: ReservesApiModelInterface) {
        super();
        this.reservesApiModel = reservesApiModel;
    }

    /**
    * init
    */
    public async init(): Promise<void> {
        // 予約 id 一覧を取得
        this.conflictsCount = await this.reservesApiModel.fetchConflictCount();
    }

    /**
    * get conflicts count
    * @return number
    */
    public getConflictsCount(): number {
        return this.conflictsCount;
    }
}

export default TopPageViewModel;
