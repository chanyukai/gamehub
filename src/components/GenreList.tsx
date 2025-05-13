import useGenres from "@/hooks/useGenres"

const GenreList = () => {
  const { genres, isLoading, error } = useGenres()
  return (
    <ul>
      {isLoading && <li>Loading...</li>}
      {error && <li>{error}</li>}
      {!isLoading && !error && genres.map(genre => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  )
}

export default GenreList