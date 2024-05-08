import Link from "next/link"

const Register = () => {
   return (
      <section class="my-10">
         <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-3/4 lg:py-0 ">
            <Link href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
               <img class="rounded-full w-8 h-8 mr-2" src="/logo-icon.png" alt="logo" />
               Fxgrow
            </Link>
            <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-screen-lg xl:p-0 ">
               <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                     Registration
                  </h1>
                  <form class="space-y-4 md:space-y-6" action="#">

                     <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        <div class="sm:col-span-2">
                           <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Email</label>
                           <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your email" required="" />
                        </div>
                        <div class="sm:col-span-2">
                           <label for="password" class="block mb-2 text-sm font-medium text-gray-900">Password</label>
                           <input type="password" name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" oncopy="return false" required="" />
                        </div>
                        <div class="w-full">
                           <label for="name" class="block mb-2 text-sm font-medium text-gray-900">Name</label>
                           <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your name" required="" />
                        </div>
                        <div class="w-full">
                           <label for="phone" class="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                           <input type="text" pattern="\d*" inputmode="numeric" name="phone" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter phone number" required="" />
                        </div>
                        <div class="w-full">
                           <label for="aadhar" class="block mb-2 text-sm font-medium text-gray-900">Aadhar No.</label>
                           <input type="text" pattern="\d*" inputmode="numeric"  name="aadhar" id="aadhar" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Your aadhar no" required="" />
                        </div>
                        <div class="w-full">
                           <label for="pan" class="block mb-2 text-sm font-medium text-gray-900">Pan</label>
                           <input type="text" pattern="\d*" inputmode="numeric" name="pan" id="pan" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="Enter pan number" required="" />
                        </div>
                        <div>
                           <label for="category" class="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                           <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ">
                              <option selected="">Select gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Others">Others</option>
                           </select>
                        </div>

                        <div>
                           <label for="dob" class="block mb-2 text-sm font-medium text-gray-900">Date of Birth</label>
                           <input type="date" value="2000-01-01" name="dob" id="dob" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required="" />
                        </div>
                        <div class="sm:col-span-2">
                           <label for="address" class="block mb-2 text-sm font-medium text-gray-900">Address</label>
                           <textarea id="address" rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Your address here"></textarea>
                        </div>
                     </div>


                     <div class="flex items-start my-5">
                        <div class="flex items-center h-5">
                           <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-red-300" required />
                        </div>

                        <label for="terms" class="ms-2 text-sm font-medium text-gray-900 ">I agree with the <a href="#" class="text-red-600 hover:underline ">terms and conditions</a></label>
                     </div>

                     <button type="submit" class="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register</button>
                     <p class="text-sm font-light text-gray-500 ">
                        Already have an account? <Link href="/login" class="font-medium text-red-600 hover:underline ">Login</Link>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Register