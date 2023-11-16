const Child = ({count,setCount}) => {
    console.log('BooksList is rednred ')
    return ( <div>
        child {count}
        <button 
        onClick={() => setCount((x) => x + 1)}
        className="bg-red-200 px-2 "
        >+</button>
    </div> );
}
 
export default Child;