
export default function MiniCanvas(obj: any) {
  const arr = Object.values(obj)
  return arr.map((e, i) => {
    if (e.type === "_paragraph" && typeof e.value === "string") {
      return <p key={i}>{e.value}</p>
    }
    else if (e.type === "_list") {
      return <ul key={i}>{e.value.map((f, i) => <li key={i}>{f.value}</li>)}</ul>
    }
    else {
      return null;
    }
  }
  )
}
