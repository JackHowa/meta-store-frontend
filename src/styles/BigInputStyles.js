import { styled } from 'linaria/react';

// taking style cues from throttle album art label
// https://www.google.com/search?biw=1291&bih=978&tbm=isch&sxsrf=ACYBGNRQuxC8IgBZUHw6nQHl6rU6mxuu6g%3A1578873167908&sa=1&ei=T7EbXtSEN5HWtAalnbmwAQ&q=throttle+dreamer+album+cover&oq=throttle+dreamer+album+cover&gs_l=img.3...48263.51726..51811...2.0..0.285.4918.5j14j9......0....1..gws-wiz-img.......35i39j0i67j0j0i10i67j0i5i30j0i8i30j0i24j0i30.g8jN0ywB5J0&ved=0ahUKEwiU6MXyoP_mAhURK80KHaVODhYQ4dUDCAc&uact=5#imgrc=Y5LkeZP3lS-AMM:

const BigInputStyles = styled.div`
  padding: 10px;
  > form {
    display: flex;
    flex-direction: column;
    border: 1px solid #ffa7c4;

    > div:first-of-type {
      > input[type='text'] {
        border: none;
        padding: 10px;
      }
      border-bottom: 1px solid #ffa7c4;
    }

    > div:last-of-type {
      display: flex;
      justify-content: space-evenly;
      padding: 10px;
    }
  }
`;

export default BigInputStyles;
