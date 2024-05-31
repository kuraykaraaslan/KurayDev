export interface Alert {
    id?: string;
    type: "success" | "info" | "warning" | "error";
    message: string;
  }

