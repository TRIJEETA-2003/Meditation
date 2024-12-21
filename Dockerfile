# Use the official Nginx image
FROM nginx:latest

# Set the working directory inside the container
WORKDIR /usr/share/nginx/html

# Remove the default Nginx static content
RUN rm -rf ./*

# Copy website files into the container
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./styles.css /usr/share/nginx/html/styles.css
COPY ./js /usr/share/nginx/html/js
COPY ./assets /usr/share/nginx/html/assets

# Expose port 80 to access the website
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]