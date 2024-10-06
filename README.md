
# 📒 ToDo App 
### A simple todo app with Next.js14, Typescript, Bootstrap, Firebase Firestore and Firebase Authentication.


You can create a new account, add todos with this account, delete or update them as done, or search through your existing todos.

This application was built with Next.js 14 with TypeScript. Firebase Firestore was used for storage, and Firebase Authentication was used for authentication. Bootstrap was used for responsible design.

<div>
   <img src="https://res.cloudinary.com/drzvwj9n9/image/upload/v1724501423/todoReadme_bzovtg.png"/>
</div>

## ⚙️ Setup

Set up your firebase configurations in the `firebaseConfig.ts` file.

```typescript
  const firebaseConfig = {
   apiKey: process.env.NEXT_PUBLIC_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
   appId: process.env.NEXT_PUBLIC_APP_ID,
   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};
```

## 🔗 Social

[![LinkedIn](https://img.shields.io/badge//SerkanDORAN-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/serkandoran/)
