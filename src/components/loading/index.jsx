

const Loading = () => {
  return (
    <div className='h-[90vh] w-[80vw] flex justify-center items-center bg-white bg-opacity-70'>
      <div className="spinner-square">
        <div className="square-1 square"></div>
        <div className="square-2 square"></div>
        <div className="square-3 square"></div>
      </div>
    </div>
  )
}

export default Loading
