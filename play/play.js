document.getElementById("close-btn").onclick = () => {
    window.location.href = "../index.html";
  };
  
  const urlParams = new URLSearchParams(window.location.search);
  const movieId = urlParams.get("id");
  
  function loadMovie(id) {
    const fallback = {
      title: "Phim mẫu",
      trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
      genres: ["Hành động", "Viễn tưởng"],
      cast: ["Nguyễn Văn A", "Trần Thị B"],
      poster: "t/avengers.jpg",
      description: "Đây là mô tả phim mẫu..."
    };
  
    const movie = (typeof movies !== "undefined" && movies[id]) || fallback;
  
    document.getElementById("trailer").src = movie.trailer;
    document.getElementById("movie-title").textContent = movie.title;
    document.getElementById("movie-genre").textContent = `Thể loại: ${movie.genres.join(", ")}`;
    document.getElementById("movie-description").textContent = `Mô tả: ${movie.description}`;
    document.getElementById("movie-cast").textContent = `Diễn viên: ${movie.cast.join(", ")}`;
    document.getElementById("movie-poster").src = movie.poster;
    document.getElementById("movie-poster").src = "../" + movie.poster;
  }
  
  window.onload = () => {
    if (!movieId) {
      alert("Thiếu ID phim!");
      return;
    }
    loadMovie(movieId);
  };
  