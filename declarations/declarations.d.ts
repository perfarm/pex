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

    JWT_SECRET: string;

    NEXT_PUBLIC_SEEDZ_FARM_URL: string;
    NEXT_PUBLIC_URL: string;
  }
}
