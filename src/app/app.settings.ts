export class AppSettings {
  public static get CHURCH_NAME() {
    return "ICB Sorocaba";
  }

  public static get CHURCH_SLUG() {
    return "icb-sorocaba";
  }

  public static get API_ENDPOINT(): string {
    return `http://localhost:3000/api/app/${this.CHURCH_SLUG}`
  }
}
