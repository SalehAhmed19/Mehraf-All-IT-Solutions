import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  //     const navigate = useNavigate();
  //   const location = useLocation();

  //   const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  //   const [signInWithEmailAndPassword, emailuser, emailloading, emailerror] =
  //     useSignInWithEmailAndPassword(auth);

  //   const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  //   let errorManage;

  //   if (error || emailerror) {
  //     errorManage = (
  //       <div>
  //         <p>
  //           Error: {error?.message}
  //           {emailerror?.message}
  //         </p>
  //       </div>
  //     );
  //   }

  //   if (loading || emailloading) {
  //     return <Loading></Loading>;
  //   }
  //   const from = location.state?.from?.pathname || "/";

  //   if (user || emailuser) {
  //     navigate(from, { replace: true });
  //   }

  //   const handleLogIn = (e) => {
  //     e.preventDefault();

  //     const email = e.target.email.value;
  //     const password = e.target.password.value;

  //     //signin with email-password
  //     signInWithEmailAndPassword(email, password);
  //   };

  //   const handleResetPassword = (event) => {
  //     const email = event.target.email.value;
  //     console.log(email);
  //     if (email) {
  //       sendPasswordResetEmail(email);
  //       alert("Sent email");
  //     } else {
  //       alert("Please enter your email");
  //     }
  //   };

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    // signInWithEmailAndPassword(data.email, data.password);
    console.log(data);
  };
  return (
    <div>
      <div className="my-12" data-theme="fantasy">
        <h2 className="text-4xl text-primary font-bold text-center p-6 mb-10">
          LogIn
        </h2>
        <div className="flex justify-center items-center">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-purple-100">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /[A-Za-z]{3}/,
                      message: "error message",
                    },
                  })}
                />
                {/* <p className="text-red-500">
                  {errors.email?.type === "required" && "email is required"}
                  {errors.email?.type === "pattern" && "email must be valid"}
                </p> */}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "error message",
                    },
                  })}
                />

                {/* <p className="text-red-500">
                  {errors.password?.type === "required" &&
                    "password is required"}
                  {errors.password?.type === "minLength" &&
                    "password must be 8 characters"}
                </p> */}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Login"
                />
                <button className="btn btn-primary mt-4">
                  <div className="flex flex-row items-center">
                    <img
                      style={{ height: "35px" }}
                      src="https://i.ibb.co/ZTdGcNf/google-logo.webp"
                      alt=""
                    />

                    <div>
                      <span className="">Continue With Google</span>
                    </div>
                  </div>
                </button>

                {/* <p className="text-red-500 text-xs">{errorMessage}</p> */}
              </div>
              <div>
                <p>
                  New to Uniseq?{" "}
                  <Link className="link link-secondary" to="/register">
                    Register{" "}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
