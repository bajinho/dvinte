import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;

  ul {
    li {
      display: flex;
      flex-direction: row;

      div {
        display: flex;
        flex-direction: column;

        > label {
          margin-left: 10px !important;
        }

        input {
          color: #6f0000;
          width: 70px;
          height: 40px;
          text-align: center;
          font-weight: 600;
          font-size: 16px;
          margin: 5px;
          margin-right: 10px;

          -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
          -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
          box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
`
export const InputLarge = styled.input`
  color: #6f0000;
  width: 260px !important;
  height: 35px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  margin: 5px;

  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
`

export const InputMed = styled.input`
  color: #6f0000;
  width: 120px !important;
  height: 35px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  margin: 5px;

  -webkit-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.6);
`