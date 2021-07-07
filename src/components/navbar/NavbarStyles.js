import styled from "@emotion/styled";
import { Colors } from "../UI/Colors";
import "../UI/styles.css";

export const NavbarStyles = styled.div`
    width: 100%;
    padding: 16px 32px 16px 24px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    background: ${Colors.lightWhite};
    
    img {
        width: 9%;

        @media (max-width: 768px){
            width: 18%;       
        }

        @media (max-width: 415px){
            width: 50%;      
        }
    }

    @media (max-width: 768px){
        padding: 16px 16px 16px 24px;       
    }

    @media (max-width: 415px){
        padding: 24px 24px 28px 36px;       
    }
`;

export const DivOptionsStyles = styled.div`
    display: flex;
    
    @media (max-width: 415px){
        background: ${Colors.backgrounsWelcomeServices};
        box-shadow: 2px 0 5px 2px ${Colors.gray};
        width: 100px;
        position: absolute;
        top: 0;
        left: 75%;
        transition: all 0.5s ease;
        padding: 0 0 4px 0;
    }
`;

export const OptionsStyles = styled.ul`
    display: flex;
    list-style-type: none;

    @media (max-width: 415px){
        width: 100%;
        box-sizing: border-box;
        flex-direction: column;
        margin: 0;
        padding: 0;
        
        li {
            width: 100%;
            border-box;
            display: flex;
            justify-content: flex-end;
            margin: 0;
            padding: 0;
            cursor: pointer;
            
            &:hover {
                background: ${Colors.gray};
            }

            .we {
                color: ${Colors.white};
                padding: 2px 8px;
                font-size: 12px;
                
                &:hover {
                    color: ${Colors.white} !important;
                }

                &:active {
                    color: ${Colors.white} !important;
                }
            }
        }
    }
`;


export const DivOptionsStylesWithHamburger = styled.div`
    @media (max-width: 415px){
        display: flex;
        flex-direction: column;

        .active {
            transform: translate(-60000px);
        }
    }

    .toogle {
        display: none
    }
`;

export const DivHamburger = styled.button`
    display: none;

    @media (max-width: 415px){
        display: flex;
        align-items: center;
        position: relative;
        z-index: 10;
        background: ${Colors.transparent};
        border: none;
        outline: none;

        .hamburger {
            color: ${Colors.textTitle};
            font-size: 24px;
            cursor: pointer;
        }
    }
`;