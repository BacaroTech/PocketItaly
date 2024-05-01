import { BasePocketReport } from '../../interfaces/models.interface';

export interface ManualPocketReportTable extends BasePocketReport {
  tradeType: string;
  user: string;
  email: string;
}