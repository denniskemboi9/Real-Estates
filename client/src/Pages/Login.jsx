// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

// function Login() {
//   const navigate = useNavigate();

//   const handleLogin = () => {

//     navigate('/Home');
//   };

//   return (
//     <div className='container'>
//     <div id="sidebar" className="col-md hidden-xs hidden-sm">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXAqp00vigLN_ub0joYrElLDkz3OYk7bQLkkbzmSxwRqWNIjmydNbWO9JDD9LwXR71b4&usqp=CAU" alt="" style={{ width: '400px', height: '400px' }} />
//     </div>

//       <div className='form'>
//       <Form>
//       <Form.Group className="col-md-4 col-sm-12 col-xs-12" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted"></Form.Text>
//       </Form.Group>

//       <Form.Group className="col-md-4 col-sm-12 col-xs-12" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>

//       <Button variant="primary" type="button" onClick={handleLogin}>
//         Log in
//       </Button>
//     </Form>
//       </div>
//     </div> 
//     <>
//     <img src="https://static.wixstatic.com/media/4a7193_3d46254f0abd4093a0a93f8d6567d090~mv2.jpg/v1/fill/w_1251,h_678,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Enrogue%20Interior_CGI%20%20(3b).jpg" alt="" />
//     <img src="" alt="" />
//     <img src="" alt="" />
//   </>
//   );
// }

// export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/Home');
  };

  return (
    <div className="container">
      <div id="sidebar" className="col-md hidden-xs hidden-sm">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxXAqp00vigLN_ub0joYrElLDkz3OYk7bQLkkbzmSxwRqWNIjmydNbWO9JDD9LwXR71b4&usqp=CAU"
          alt=""
          style={{ width: '400px', height: '400px' }}
        />
      </div>

      <div className="form">
        <Form>
          <Form.Group className="col-md-4 col-sm-12 col-xs-12" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="col-md-4 col-sm-12 col-xs-12" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>

          <Button variant="primary" type="button" onClick={handleLogin}>
            Log in
          </Button>
        </Form>
      </div>

      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV2raMEVn1tNeC0ozM-zPBadrH858ieCw_zw&usqp=CAU"
        alt=""
      />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWzqUIIvwXygiANznSwrB9ZdwYpKghzSr6g&usqp=CAU" alt="" />
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHZrxKMod3gx6YRoVY4QUY9pH2isnr2QXPsA&usqp=CAU" alt="" />
    </div>
  );
}

export default Login;

