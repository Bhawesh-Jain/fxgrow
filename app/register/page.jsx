import Link from "next/link"

const Register = () => {
  return (
    <section className="my-10">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-3/4 lg:py-0 ">
        <Link href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <img className="rounded-full w-8 h-8 mr-2" src="/logo-icon.png" alt="logo" />
          Fxgrow
        </Link>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-screen-lg xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Registration
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">

              <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                <div className="sm:col-span-2">
                  <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your email" required="" />
                </div>

                <div className="sm:col-span-2">
                  <label for="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                  <input type="password" name="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" oncopy="return false" required="" />
                </div>

                <div className="w-full">
                  <label for="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                  <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your name" required="" />
                </div>

                <div className="w-full">
                  <label for="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                  <input type="text" pattern="\d*" inputmode="numeric" name="phone" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter phone number" required="" />
                </div>

                <div className="w-full">
                  <label for="aadhar" className="block mb-2 text-sm font-medium text-gray-900">Aadhar No.</label>
                  <input type="text" pattern="\d*" inputmode="numeric" name="aadhar" id="aadhar" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your aadhar no" required="" />
                </div>

                <div className="w-full">
                  <label for="pan" className="block mb-2 text-sm font-medium text-gray-900">Pan</label>
                  <input type="text"name="pan" id="pan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter pan number" required="" />
                </div>

                <div>
                  <label for="category" className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                  <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                    <option selected="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>

                <div>
                  <label for="dob" className="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
                  <input type="date" value="2000-01-01" name="dob" id="dob" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                </div>

                <div className="w-full">
                  <label for="bank-name" className="block mb-2 text-sm font-medium text-gray-900">Bank Name</label>
                  <input type="text" name="bank-name" id="bank-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your bank name" required="" />
                </div>

                <div className="w-full">
                  <label for="acc-number" className="block mb-2 text-sm font-medium text-gray-900">Account Number</label>
                  <input type="text" pattern="\d*" inputmode="numeric" name="acc-number" id="acc-number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter account number" required="" />
                </div>

                <div className="w-full">
                  <label for="acc-holder" className="block mb-2 text-sm font-medium text-gray-900">Account Holder</label>
                  <input type="text" name="acc-holder" id="acc-holder" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter account holder" required="" />
                </div>

                <div className="w-full">
                  <label for="ifsc-code" className="block mb-2 text-sm font-medium text-gray-900">IFSC Code</label>
                  <input type="text"  name="ifsc-code" id="ifsc-code" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter ifsc code" required="" />
                </div>

                <div className="sm:col-span-2">
                  <label for="address" className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                  <textarea id="address" rows="5" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your address here"></textarea>
                </div>

              </div>


              <div className="flex items-start my-5">
                <div className="flex items-center h-5">
                  <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300" required />
                </div>

                <label for="terms" className="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" className="text-red-600 hover:underline ">terms and conditions</a></label>
              </div>

              <button type="submit" className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register</button>
              <p className="text-sm font-light text-gray-500 ">
                Already have an account? <Link href="/login" className="font-medium text-red-600 hover:underline ">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register