declare namespace ReactLoginSolo {
  interface Exception {
    where: string;
    when: Record<string, unknown>;
    what: Error;
  }
}
