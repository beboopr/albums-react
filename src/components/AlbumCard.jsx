export default function AlbumCard({ thisAlbum }) {
  
    // const removeIt = await cityRef.update({
    //     method: FieldValue.delete()
    //   });
  const deletone = ()=>{
    fetch(`http://127.0.0.1:5002/albums/${thisAlbum.albumId}`, {
    method: "DELETE",
    headers: {"Content-Type" : "application/json"}
})
.then(result=>result.json())
.then(data=>console.log(data))
.catch(alert)

  }
  return (
    <div className="album">
      <h3>{thisAlbum.album}</h3>
      <p>
        {thisAlbum.year},{thisAlbum.artist}
      </p>
     <button onClick={deletone}>

     </button>
    </div>
  );
}
