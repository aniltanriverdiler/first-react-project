import styles from "./Hero.module.scss";

export const HeroSection = () => {
  return (
    <header className="py-5">
      <div className="container px-lg-5">
        <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
          <h1 className="fw-bold display-5">A warm welcome!</h1>
          <p className="fs-4">
            Bootstrap utility classes are used to create this jumbotron since
            the old component has been removed from the framework. Why create
            custom CSS when you can use utilities?
          </p>
          <a className="btn btn-primary btn-lg">Call to action</a>
        </div>
      </div>
    </header>
  );
};
