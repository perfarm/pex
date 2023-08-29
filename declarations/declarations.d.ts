declare namespace NodeJS {
  export interface ProcessEnv {
    API_URL: string;

    FIREBASE_APP_KEY: string;
    FIREBASE_AUTH_DOMAIN: string;
    FIREBASE_DATABASE_URL: string;
    FIREBASE_PROJECT_ID: string;
    FIREBASE_STORAGE_BUCCKET: string;
    FIREBASE_MESSAGING_SENDER_ID: string;
    FIREBASE_APP_ID: string;

    SEEDZ_FARM_URL: string;

    JWT_SECRET: string;
  }
}
