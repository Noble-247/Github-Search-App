function About() {
  return (
    <section className='about-section container'>
      <h1 className='text-primary large text-center mb-4'>
        About Github Search
      </h1>

      <div className='card bg-light'>
        <h2 className='text-dark mb-2'>What is Github Search?</h2>
        <p className='lead'>
          Github Search is a powerful tool that allows you to easily search and
          explore Github user profiles. Built with React, this application
          leverages the Github API to provide real-time access to user
          information.
        </p>
      </div>

      <div className='grid-2 my-3'>
        <div className='card bg-white'>
          <h3 className='text-primary'>Key Features</h3>
          <ul className='list'>
            <li>🔍 Real-time Github user search</li>
            <li>👤 Detailed user profile information</li>
            <li>📊 User statistics and metrics</li>
            <li>📱 Responsive design for all devices</li>
          </ul>
        </div>

        <div className='card bg-white'>
          <h3 className='text-primary'>Technical Details</h3>
          <ul className='list'>
            <li>⚛️ Built with React</li>
            <li>🔄 Uses Github REST API</li>
            <li>🎨 Custom CSS styling</li>
            <li>🚀 Fast and efficient searches</li>
          </ul>
        </div>
      </div>

      <div className='card bg-light text-center'>
        <h3>Version Information</h3>
        <p>Current Version: 1.0.0</p>
        <p className='text-secondary'>Created with ❤️ by Emmanuel</p>
      </div>
    </section>
  );
}

export default About;
