/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './register.scss';
import {
  useDispatch, useSelector,
} from 'react-redux';
import React, { useState } from 'react';
import { postUser } from '../../redux/slices/userSlice';

function Register() {
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: '',
    lastName: '',
    userName: '',
    email: '',
    birthDate: '',
    password: '',
    repeatPassword: '',
    profilePic: '',
  });

  function validate(input) {
    const errors = {};
    if (!input.name) {
      errors.name = 'Game must have a name';
    } else if (!input.description) {
      errors.description = 'Game must have a description';
    } else if (input.platforms.length < 1) {
      errors.platforms = 'Game must have a platform';
    }
    return errors;
  }

  function handleChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,

    });
    setErrors(validate({
      ...input,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    // eslint-disable-next-line max-len
    if (input.name.length >= 1 && input.lastName.length >= 1 && input.userName.length >= 1 && input.password.length >= 1) {
      dispatch(postUser(input));

      alert('Game Created Successfully');
      setInput({
        name: '',
        lastName: '',
        userName: '',
        email: '',
        birthDate: '',
        password: '',
        repeatPassword: '',
        profilePic: '',
      });
    } else { alert('Complete the missing info'); }
  }

  return (
    <section className="registration">

      <div className="registration__data">
        <h1 className="registration__data__title">User Register</h1>
        <form className="registration__data__form">
          {console.log(input)}
          <label>
            Input your name:
            <input className="registration__data__form__name" name="name" placeholder="Name..." type="text" onChange={(e) => handleChange(e)} />
          </label>

          <label>
            Input your last name:
            <input className="registration__data__form__last__name" name="lastName" placeholder="Last name..." type="text" onChange={(e) => handleChange(e)} />

          </label>

          <label>
            Input your user name:
            <input className="registration__data__form__user__name" name="userName" placeholder="User name..." type="text" onChange={(e) => handleChange(e)} />

          </label>

          <label>
            Input your email:
            <input className="registration__data__form__email" name="email" placeholder="Email..." type="text" onChange={(e) => handleChange(e)} />

          </label>

          <label>
            Input your birth date:
            <input className="registration__data__form__birth__date" name="birthDate" placeholder="Date of Birth..." type="text" onChange={(e) => handleChange(e)} />

          </label>

          <label>
            Input your name:
            <input className="registration__data__form__password" name="password" placeholder="Choose Password..." type="text" onChange={(e) => handleChange(e)} />

          </label>

          <label>
            Input your name:
            <input className="registration__data__form__repeat__password" name="repeatPassword" placeholder="Repeat Password..." type="text" onChange={(e) => handleChange(e)} />

          </label>

          <label>
            Input your name:
            <input className="registration__data__form__image" placeholder="Profile Picture..." name="profilePic" type="text" onChange={(e) => handleChange(e)} />

          </label>

        </form>
        <div className="registration__data__buttonRow">
          <button className="registration__data__buttonRow__button__submit" type="submit" onClick={(e) => handleSubmit(e)}>Register!</button>
        </div>
      </div>
    </section>
  );
}

export default Register;

// const genres = useSelector((state) => state.genres);

// export const postUser = createAsyncThunk(
//   'users/createUser',
//   async () => {
//     try {
//       const response = await axios.post('/')
//     }
//   }
// )
