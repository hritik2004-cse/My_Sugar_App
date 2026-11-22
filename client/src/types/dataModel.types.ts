export type DataModelProps = {
  date: Date;
  id: string;
  reading: number;
  loadData: () => Promise<void>;
};
