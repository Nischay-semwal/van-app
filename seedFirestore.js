// seedFirestore.js
import { db } from "./firebase.js"
import { collection, setDoc, doc } from "firebase/firestore"

const vans = [
  {
    id: "1",
    name: "Modest Explorer",
    price: 60,
    description: "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette...",
    imageUrl: "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
    type: "simple",
    hostId: "123"
  },
  {
    id: "2",
    name: "Beach Bum",
    price: 80,
    description: "Beach Bum is a van inspired by surfers and travelers...",
    imageUrl: "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
    type: "rugged",
    hostId: "123"
  },
  {
    id: "3",
    name: "Reliable Red",
    price: 100,
    description: "Reliable Red is a van that was made for travelling...",
    imageUrl: "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
    type: "luxury",
    hostId: "456"
  },
  {
    id: "4",
    name: "Dreamfinder",
    price: 65,
    description: "Dreamfinder is the perfect van to travel in and experience...",
    imageUrl: "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
    type: "simple",
    hostId: "789"
  },
  {
    id: "5",
    name: "The Cruiser",
    price: 120,
    description: "The Cruiser is a van for those who love to travel in comfort and luxury...",
    imageUrl: "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
    type: "luxury",
    hostId: "789"
  },
  {
    id: "6",
    name: "Green Wonder",
    price: 70,
    description: "With this van, you can take your travel life to the next level...",
    imageUrl: "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
    type: "rugged",
    hostId: "123"
  }
]

const user = {
  id: "123",
  email: "b@b.com",
  password: "p123",  // ⚠️ For now, we’re storing plain password just to match Mirage; never do this in production!
  name: "Bob"
}

async function seedFirestore() {
  const vansCollection = collection(db, "vans")
  const usersCollection = collection(db, "users")

  for (let van of vans) {
    await setDoc(doc(vansCollection, van.id), van)
    console.log(`Van "${van.name}" added`)
  }

  await setDoc(doc(usersCollection, user.id), user)
  console.log("User added")
}

seedFirestore();
