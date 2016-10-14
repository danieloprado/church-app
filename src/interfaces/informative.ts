export interface IInformative {
  id: number;
  title: string;
  date: Date;
  message: string;
  creatorId: number;
  churchId: number;
  typeId: enInformativeType;
}

export enum enInformativeType {
  church = 1,
  cell = 2
}
