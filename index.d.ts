declare namespace ReactLoginSolo {
  interface UserCredentials {
    username: string;
    password: string;
  }
  interface Exception {
    where: string;
    when: Record<string, unknown>;
    what: Error;
  }
}
