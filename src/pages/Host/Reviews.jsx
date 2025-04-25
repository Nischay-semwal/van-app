import React from "react"
import { BsStarFill } from "react-icons/bs"

export default function Reviews() {
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]

    return (
        <section className="max-w-3xl mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Your reviews</h2>
                <p className="text-gray-600">
                    Last <span className="font-semibold text-black">30 days</span>
                </p>
            </div>

            <img
                className="w-full rounded-md mb-6"
                src="https://images.unsplash.com/photo-1596477602103-1c7f7a2ebc4c?auto=format&fit=crop&w=800&q=80"
                alt="Review graph"
            />

            <h3 className="text-xl font-semibold mb-4">Reviews ({reviewsData.length})</h3>

            {reviewsData.map((review) => (
                <div key={review.id} className="mb-6">
                    <div className="mb-2 flex items-center">
                        {[...Array(review.rating)].map((_, i) => (
                            <BsStarFill className="text-yellow-400 mr-1" key={i} />
                        ))}
                    </div>
                    <div className="mb-1">
                        <p className="font-medium">{review.name}</p>
                        <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <p className="text-gray-700">{review.text}</p>
                    <hr className="mt-4 border-gray-200" />
                </div>
            ))}
        </section>
    )
}
