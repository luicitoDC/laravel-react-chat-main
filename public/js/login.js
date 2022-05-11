

const domContainer = document.querySelector('#chat-login-form');
const root = ReactDOM.createRoot(domContainer);
const e = React.createElement;

const Login = () => {

  const [formData, setFormData] = React.useState({
    email: 'enteng@email.com',
    password: '123123123'
  })

  const onChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const onHandleSubmit = async e => {
    e.preventDefault()
    const response = await axios.post(`${window.appConfig.baseUrl}/login`, formData, window.appConfig.axiosConfig)
    if(response.status === 200){
      document.cookie = `token=${response.data.access_token}`;
      window.location.href = '/chat-room'
    }
  }

  return (
    <div className="w-screen h-screen flex">
      <div className="flex items-center justify-center m-auto">
        <div className="w-full w-96">
          <form onSubmit={onHandleSubmit} className="bg-white shadow-lg rounded px-12 pt-6 pb-8 mb-4">
            <div
              className="text-gray-800 text-2xl flex justify-center border-b-2 py-2 mb-4"
            >
              Simple Chat
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="email"
                v-model="form.email"
                type="email"
                required
                autoFocus
                placeholder="Email"
                onChange={onChange}
                value={formData.email}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-normal mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                v-model="form.password"
                type="password"
                placeholder="Password"
                name="password"
                required
                autoComplete="current-password"
                onChange={onChange}
                value={formData.password}
              />
            </div>
            <div className="flex items-center justify-between">
              <button className="px-4 py-2 rounded text-white inline-block shadow-lg bg-blue-500 hover:bg-blue-600 focus:bg-blue-700" type="submit">Sign In</button>
              <a
                className="inline-block align-baseline font-normal text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Sign up
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            &copy;2022 Project. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

root.render(e(Login));