import { Link } from "react-router-dom";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: -10,
        top: 0,
        border: `2px solid #000`,
        padding: "0 4px",
        backgroundColor: "#fff",
    },
}));

export default function Header() {
    const carQuantity = 1;
    return (
        <div>
            <header id="main-header">
                <div id="main-title">
                    <h1>Elegant Shop</h1>
                </div>
                <p>
                    <Link to="/checkout">
                        <IconButton aria-label="cart" size="large">
                            <StyledBadge badgeContent={carQuantity}>
                                <ShoppingCartIcon size="large"/>
                            </StyledBadge>
                        </IconButton>
                    </Link>
                </p>
            </header>
        </div>
    );
}