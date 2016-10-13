export class AppSettings {
  public static get CHURCH_NAME(): string {
    return 'ICB Sorocaba';
  }

  public static get CHURCH_SLUG(): string {
    return 'icb-sorocaba';
  }

  public static get API_ENDPOINT(): string {
    return `http://localhost:3000/api/app/${this.CHURCH_SLUG}`;
  }
}
