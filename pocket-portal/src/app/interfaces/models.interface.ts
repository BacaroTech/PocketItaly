export interface FactoryItemStore {
  id: number;
  name: string;
  address: string;
  img: string;
}

type TradeType = "physic" | "online";
type LevelReport = "high" | "low";
type ReportType = "map" | "web" | "manual";
type OutcomeType = "positive" | "negative";
type AnalysisType = "link" | "code" | "image"

export interface BasePocketReport {
  id: number;
  reportNumber: string;
  date: string;
  reportType: ReportType;
  outcome: OutcomeType;
  levelFake: number;
  positiveCounting: number;
  negativeCounting: number;
  analysis: AnalysisType;
}

export interface MapPocketReport extends BasePocketReport {
  lat: number;
  long: number;
}

export interface ManualPocketReport extends BasePocketReport {
  tradeType: TradeType;
  user: string;
  email: string;
}

export interface WebPocketReport extends BasePocketReport {
  domain: string;
  urlProduct: string;
}

export interface RawPocketReport extends BasePocketReport {

  lat?: number | null;
  long?: number | null;

  tradeType?: TradeType | null;
  user?: string | null;
  email?: string | null;
  
  domain?: string | null;
  urlProduct?: string | null;
}

// rect italy
// westernmost 45.12500480950102, 6.492873997211415
// easternmost 40.22734086577605, 18.768378235582265
// northernmost 47.14366585485491, 12.16510065312936
// southernmost 36.63388862606213, 15.092899479020796