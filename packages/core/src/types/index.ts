export type State = {
  [key: string]: any;
};

export interface User {
  id?: string;
  username?: string;
  avatar?: string;
}

export type Id = string | number;

export interface Resource {
  props: {
    id: string;
    hasList: boolean;
    hasEdit: boolean;
    hasShow: boolean;
    hasCreate: boolean;
  };
  data: [];
  list: {
    params: {
      sort?: string;
      order?: number;
      page: number;
      perPage?: number;
    };
    selectedIds?: [Id];
    total?: number;
  };
}
