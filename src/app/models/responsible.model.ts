export interface Responsible {
  id: number;
  name: string;
}

export interface ResponsiblesState {
  responsibles: Responsible[];
  isPending: boolean;
  isLoaded: boolean;
  errMsg: string;
}
