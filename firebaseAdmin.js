import admin from "firebase-admin";
import serviceAccount from "./secret.json";

export const verifyIdToken = async (token) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  try {
    return admin.auth().verifyIdToken(token);
  } catch (error) {
    throw error;
  }
};
