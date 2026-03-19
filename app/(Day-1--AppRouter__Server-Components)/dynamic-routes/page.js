import Link from "next/link";

export default function MoviesPage() {
  const movies = [
    { id: "1", title: "Inception" },
    { id: "2", title: "Interstellar" },
    { id: "3", title: "The Dark Knight" },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Movies List</h1>
      <ul className="space-y-4">
        {movies.map((movie) => (
          <li key={movie.id} className="bg-black p-4 rounded-lg">
            <Link
              href={`/dynamic-routes/movies/${movie.id}`}
              className="text-white hover:text-blue-600"
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}