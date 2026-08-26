const BOARD_URL = "https://claude.ai/code/artifact/2542a3a2-ad9f-418d-bfc6-70ece595706e";

export default {
  async fetch() {
    return Response.redirect(BOARD_URL, 302);
  },
};
