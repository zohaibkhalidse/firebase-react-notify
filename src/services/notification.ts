import {
  collection,
  addDoc,
  updateDoc,
  doc,
  query,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { db } from "../libs/firebase-config";
import { Notification } from "../types/notifications";

// Reference to the "notifications" collection in Firestore
const notificationsCollection = collection(db, "notifications");

// Function to add a new notification with a message and unread status
export const addNotification = async (message: string) => {
  await addDoc(notificationsCollection, { message, read: false });
};

// Function to listen for all notifications and call a callback with the data
export const listenForUnreadNotifications = (
  callback: (notifications: any[]) => void
) => {
  const q = query(notificationsCollection);
  return onSnapshot(
    q,
    (snapshot) => {
      // Convert the snapshot data into a list of notifications
      const notifications = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(notifications); // Call the callback with the notifications
    },
    (error) => {
      console.error("Error listening for notifications: ", error);
    }
  );
};

// Function to mark a notification as read and return the updated notification
export const markAsRead = async (id: string): Promise<Notification | null> => {
  try {
    const notificationDoc = doc(db, "notifications", id);
    await updateDoc(notificationDoc, { read: true }); // Update the "read" status to true

    const updatedDoc = await getDoc(notificationDoc);
    if (updatedDoc.exists()) {
      return { id: updatedDoc.id, ...updatedDoc.data() } as Notification;
    } else {
      console.error("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error marking notification as read: ", error);
    return null;
  }
};
