const KEY = 'aviu_pending_search';

/** Called by the header search bar right before navigating to Course Finder. */
export function setPendingSearch(query: string) {
  try {
    sessionStorage.setItem(KEY, query);
  } catch {
    /* ignore (private browsing / storage disabled) */
  }
}

/** Called once by Course Finder on mount. Reads the query and clears it so it isn't reused. */
export function consumePendingSearch(): string {
  try {
    const value = sessionStorage.getItem(KEY) || '';
    if (value) sessionStorage.removeItem(KEY);
    return value;
  } catch {
    return '';
  }
}
