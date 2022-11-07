import Header from "./Header";
function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="content"></div>
      </div>
    </>
  );
}

export default DefaultLayout;
