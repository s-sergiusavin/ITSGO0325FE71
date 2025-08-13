import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITERUSEhISFRUXFhcXGBUVFRcVFxcYGBUWGBcYFRYYHSggGBolGxUVIjEhJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGi0lHyUtLSsrLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xAA7EAABAwIEAwUHAwIFBQAAAAABAAIRAyEEBTFBBhJRImFxgZETMqGxwdHwB0LxUuEUI3KishUWM1OS/8QAGQEBAAMBAQAAAAAAAAAAAAAAAAIDBAEF/8QAJREAAgICAwACAwADAQAAAAAAAAECAxEhBBIxQVETIjIjM2FC/9oADAMBAAIRAxEAPwDtiIikRCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIpQEIiIAiIgCIiAIiIAilQgCIpQEIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiKEBKKFKAIgUoCFKIgCQpSEBCKUXDpClSkICISFKIDzCQvSiQgIhFKQgIRTChdBCKUQ4QiIgCIiAIiIAiKJQBFEqJQHpJXmUQHqVEqFKAleH1QNSvNaqGiSVyzjbjOXmjRdBBguB+SHTodfPaLDBeB5qvgc5oVbMqNJ6TdcIZiqlR3vEnrP3WbwlNzYAN+u99I+XmqbLVEshX2Ov43NqNL/yVGju1PwWGr8a0B7raju+IHxWmMwZiSCSdje/UKoMI4CSDF5HTv8ARZ3zEaFxXg2c8cs/bRcfMKf++qYPapOHmFpeIYWAnYeWtlicZXdqPT6+kK2u9TKrKXE7DlvEmHrWa7lJ2db0V3js1o0m8z3tHnJPgFw6hmRB38kq5iXX5neEyPJX5KTqeI47w7Z7NQ+AH3svFP8AUBGJEW1Hu4g+eVzPPMu+0NAt+9h5tWv8A6vN5n6fBbrxf4j/8A52+gG3iub55l3s6v7m3G2yvXyVq7+SjK9To+G4Nl+a0c4oVGOgE9v3W+Y26rp+W8S4XNo03s7iQvmbL8S5pM/XorjBYtzH8pI8PmuT4UeY75S0934T1+2bT+K4dnmW87C41r+k3I+u1dSyji/CZhBfzaZ3c38V5sckd0xGWOX9tF3hChS9M5l0EREOBERAQoUSolATKLyiAmUUKHPA1ICHT2oc6NVY4nN6LBeo31C0bjTjVraZ9mTzGwvCrlbFa+SyNcnsx/6mcXkPOGouuPfcDPkO9c2okudcmT1uvfsalZ/uve5xkweq3jIeHKdNvPU97XlcQ78Kpt5EYLfpZXQ5vXhZ5TgeVuo5tTr84WwYJrGmJMnqd+/opdyBp9kWTMAHUnda+51XnIJIdzNBGxggjy006rB2lY3k39IQWjbm1zqIj8lQ+obT4x3Xt8PkrTKmu9n2tbW31Px0VxWwp21aPHYfUFZpV7L00W1XTQRvO+v1j1VhmGFmQ0WIEdCY0Hfc+SvOa8nfTrIkW63he6mFJF5gCZne2h8D8e5XVPBVbE0z2bnjsi4gREXvr6K4o4YEmw5bwN5nlj16vNqYAkAm8mQDb5gC915ocLyaG/a0nUeLh+FzWd2Xj8y3eM90m589d9Fh61c94I9x09Qdl5rVSRr09fqs7y79kLh+eS489VznGv8AE1XnU7qfVbHm1b2lVz8d7dFY4KkOcs6iC302K6bWkR92lKjG10zLh+M/dY0sYp3t5TqFYc6Fm3191TpsHNa18L0+x0nC8tU7Wd02uM5y6oKVR06G692G8B1sQeao2J/S3Qd9l1PhLg2hk8Gox1R3ve8S8nYdGjYJ5cM9T4c5n/AIdn2XUaG3+83oF4xHBdXDS5uYd7p7wOi74oWhJ9iWjLh093s+c7t5W3e5X2XYI1TzNEy667r644j4Hw+YtL3sFP/v03bfQrlHOfBmIy4moxzD7vcaJ3H5W0bBw0jQcR4WpRc5zYcGk21C5fXg33XesM+qG7iVz/OMnL3m1FhK9XF/I5s1xV2Fk8sC6jG0jZWeX5w5nJXc1cTfE6H7K1Wc9xLjqV6n48/8AyZ313gDgnD4jDNcGgi2oXRsj4DwOVM5KVMU3H2r7R4dFzLg7MhTxNIdQdAP8AXuC7MvE3B2MziGzRkU2+8Ym3r0W8Yt/U+SjL3XU2jU092u0dF5rR2gR1XHc2+BswwzTUqgVI/p12zMHeNwvWScSYnK3gV/bUxtV/u+IWU4vgyjLHs7dUV4bXG+Hcxo1g7m7nK/qf2l54XN2XvWcZt9hM0oFq5QpRWlQq7oUqXJ4Cg1gJc4ho6m60nj3jGjlrdG8/oOi55kXD9TiPi/a4j2dJhs6b/gBsu0w2XUMHSFKg0Na0QCk3K22jSMK/rOXV+M+J8bX7B5Gk67d+y8Yd8e6XFxJ7rle5w6bKllOXkOa4Vq4x13PZHoV5PItWjW7qLgV+m7G+tYvA3B/a9332XOM44lJ9k0/2Xp/G4F9A+2o8fMLxic2tV+9Uf8S82T2p4aJ/Uq+j7g+D/AIh451U98dI/tXUsj4ao0gKlQ9s8/Jc04Czehhc0L3k03gMcdAduq7YpUgtLTYmQfNbfU/5t9o5P+yYnF+T6xG62c6n9hYqthQ73L03E7/AHVpX1j+4vTY+TzK71eXGfW7lXz2Lw/Z5t7qD1A0Xl7x+8FhsdXyR7M+dZ/F7X1C8i+hW6XnS9i5lq4c7S5oNgb7W8Vm+HOGq+Z1W0qI5QZc8mQO036rM8D+D34vEVMRiRyU2y0NItdM38l3rKcmw+WsDMPTygaQNPXqspQ8xMcpb4K+SZbRydg+FcPlbW8lFrXgRztH2h5dOquc4jE0+U8pGnaRpsfRZZFCjH/AGXm239vV+5rZ/E0oA5369Y9YWuV6m/T3K6/Ncmw+YMDMQwT+8N/Nc74h4Uymj+6tXU+l7t8VfFqU6Xn5J9nJ3PZzE9fms/g6f8AgI1B+q90+Xva6q2F8rX+h9FW/NfI6XlOH9iF74G3+z81i502m8dG+Q9Fk62H5hKk+QfL4BaxmU0w6L9wM+q8/D/B29e/YvYvA5f95h3T6Kpg8yqU/du3+i2yq1xY8M05eY+F+sKvUa72rDcb+8N3D0R8T2b2U3yvA7D9D3F3aYyQ7Y+IuFhX/ANPcXQ/oYgP/AMyH+W/5WdY8G6lO/gqj6Zt7w8j+V6uOXI9UeW65Lh1HJs+Y2Yd5bVaS6i4i+6zCjV9N8D3BwMQfI6rjXHvBgyvEOc0E0nnsX6b89vK28WfW9lM4b9y3Ld0i3H9M+s4c7d0H3j0aP/lXQ1x/wDQbB8lB1Zwk1HQP6QNPmXfQd12C6y88v+mERFJE4REWt8ZcZYXKxLzzy+7T/AD6JklGOrZpGLlLY17jbjTDZS0xNSoe60/yXK8y4s4i4j7dJnoJ91vQLxgeC63G+K4/iSq72lRp5abZgEgQO093QLusj4IwOWtHJRc8/vVJk+g2WcpP2+TWMV9+04/wAGcOYbJ+Hw1Z/lFRh7W/u6Bdvgs3leXUwAygBvC6m06m4I6p7Jq0xS9E/wAp5k6bFKhSstWqIq4bN8FmB/dYd38Q29V9AVznirgPDZlBq0xyp/p1G7+I6dFaU8/N4b9nZcE9x9rKz/wASy/2Wf8Wp/E0/2XhOQ4zLHFvK6kO9hXnJ+BcU89tJ0N+8e6dF0XKMvGFa3P8AjZg2e1r3E7aKjmnHeGwW/tHk+7C429VzHjLg7F5e0VMVUXVpvcAABb3JWs8GZBl/EHEFL96pTA5nQGz6rG8vY6SjCK2O68K8VYXOaYdQcGv8AaBse/quhR7I/Bck4o4NynLMv/xXnNR26+8fReeA+M8Rwe8YfEWdTA4Oa4SD3FR4ZzR2q+WJ4hDk9nTM0283sXnFcN0sXh4xLGuBsTYmCusZWq990yXq2u+v/T/ALwzR9f2j6J7J1rE5r/a/mP2lQy509kR6q6+o6p8R+ELejH0eM/Zz3l+H8ZlP3vA2/tJ+i3XL+JcJi/6gP8AiH3Xg4H4NbiKzq2+53f0C7Dl/DOGwYDGW8bnuu2/Jc3/AGM+z9m9rR21rSj8M4ZlK3X+oD8Fw7iTC/wB3Xcwf3v1Xo+L+NcJgW8mHj2g6B/d+a5VjuHc345qZpL40n+m2+11r8y/5L3dFvD+vR07g3jXEYOqKWYgupm4c7ceS79g8dRxNIVKTw5p2I/uF85V+DeJcI92Iw+K52G0fRdr+HXiWz9j8A0Op/v03jYjYpY5N4f9zLKMYN/8ASfQERXlMhVd0REBFea2Lz/jXAZO081T2jh7rN/xUblFc+yEYuT0jauI+NMFkrTe8VKn9uoZmFzbiXjHMc4cW4Fop09yN3eZWDg8rxfF+M4jMcwq8tOm28yGgDcBdt4c4bw2T0BTpNDT73eS8ynKUveaPbpGMV9+5zLgDg2rlr2ZpnW7g/k+e8l2bL6DGjkbAAgK6iK1H7XpGWSX3+ERdOaIiBChSot9u9A2DjHifH0qDqQeQ6m/qFz3g7I8w4l4i+1xL3Uw4Fz55bCNh/VdZz/AIMwmaB7jTFGp1c0D5LlnEODzXgyvFfKxFKb6iA4D6pSUn7R2jSMUvfqd4zfMabKDnONgJJ6BbLw3xrhc4pCo13K/3mnULnHDuT4zibimYjEtp5a2gZ222C8cYcK5jwbjG4nLq/t8uqvEgzA1BvYpk9j9+gq2V79+h6cZcM5fxtQ/iYGrD6hA/dO4Xn+F+M8Twm4YLPnOoN05idR3hdN4S47wfGlL98j6jdu0dF1vLcxoYymKjHAgjUFWl3T2lOXYu0eFz/gDi3C+JeIKD62GdVY526/wD0rscj4WpZVh/Z0Wxr/ed16eC88+p1j+P8v4eL4a51e60T3/5Xm+x2vU8aN+y/Z0H+I7mJ09fuvWJcM+S84m2xVb+oR9V61uG/h+U+a8rK8x19F30fK5k9X48pYxW1U6w+d+5VMcI7IHoq9N0m/wB+69K7pM+gXoMfkc67xYvjM2pUn8tQd5/X8lc8Z411bF87i4n3e8rXazr3+5PzW8cLcMfiMYHVBzoP1/lWlK1K82Xk5u0sJ0n9Pe/9Pc8+F+H/AGLmtqu5y83aO5dGy/hPCZKxpt5n/eNfgu9L2122iIotbI+t5Zp+3+yIivLNIiIgIiIAiIgCIiAhChRFo/FHAuHzpruaA5h3G+65LnvCea8A4x+IymqX0yZHQje676iKqTj+p94jGMl7j57yHiHMcD4tbydStTy1D73h3lfoZl2aUsxpCrSeHNIkEL5e4o4JqcN4m/F4R3Lp1XQ6H9p9Psuh8E8bc5pD/wCKU+Yw0kH9wR+V5uS5L3FnrY8W+yfqdtRFaV4fOEREdBERAQoUSolA2fNcwFJhcegkuJ2C6dw3kLcx4u7E4h2mn2nHY9/guZ8IYN3E+P167dKVMj0aAPuvpTCYdtFobGg/xSlH+3yFOf9vkKFKJdOaIiAIiIAiIgCIiAIiIAiIgCIiAhChRFo3G3CuHzsTykUpBw33XLM+4BzvgrG/xGS1HOphxB8BvCu+oiqi+3yJGLkfY+Z8v4mznL+IMxOVVXuq1zJj+k7bX2DkucUs5wzK1Bwe0kEG/kuIcaeAaz8Q7F5O6Pao90a/RZRl7iGEYtf4dG4l4jwWWUjUqvaHfaB+9eBvuvm3iLiHM+K8w/wAPy+m/D4R/d5rEEHeNuy6TwLwI/G1BmeZObA07f3vNc9F3TLcnw+W4dlJgDWgWgLT0v7n+1/tE3f0j/ABXyvD5hgcHhW8mGo8rW6w0a7mN19B5Txhh87wD/Z1G80gPaJjXReE+IuA8NneZUsXWoM5qLSLuO8Qe/uuN8OcL5nwPjmMdRrc+Gq3a4f1Cd3H6pYm+n3+QcvyX7/P+x9IqjVY8Q6QdQe6qItLKIQpRUgIiID//Z" alt="" />
          <input
            placeholder="La ce te gândești?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon"/>
              <span className="shareOptionText">Foto/video</span>
            </div>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon"/>
              <span className="shareOptionText">Etichetează persoane</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon"/>
              <span className="shareOptionText">Vizită</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
              <span className="shareOptionText">Stare</span>
            </div>
          </div>
          <button className="shareButton">Distribuie</button>
        </div>
      </div>
    </div>
  );
}