"use client";
import { Provider } from "react-redux";
import user from "./user";
export function UserStateProvider({ children }: React.PropsWithChildren) {
  return <Provider store={user}>{children}</Provider>;
}
