#!/bin/bash

# Function to generate a random username
generate_username() {
    local username=$(head /dev/urandom | tr -dc 'a-z0-9' | head -c 8)
    echo "$username"
}

# Function to generate a random name
generate_name() {
    local first_names=("John" "Alice" "Emma" "Michael" "Sophia" "William" "Olivia" "James" "Emily" "Benjamin")
    local last_names=("Smith" "Johnson" "Williams" "Jones" "Brown" "Davis" "Miller" "Wilson" "Moore" "Taylor")
    local first_name=${first_names[$(($RANDOM % ${#first_names[@]}))]}
    local last_name=${last_names[$(($RANDOM % ${#last_names[@]}))]}
    echo "$first_name $last_name"
}

# Function to generate a random email
generate_email() {
    local domains=("gmail.com" "yahoo.com" "outlook.com" "hotmail.com" "aol.com")
    local username=$(generate_username)
    local domain=${domains[$(($RANDOM % ${#domains[@]}))]}
    echo "${username}@${domain}"
}

# Function to add a user
add_user() {
    local id="$1"
    local username="$2"
    local name="$3"
    local email="$4"

    curl --location 'http://localhost:8080/addUser' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "id": '"$id"',
        "username": "'"$username"'",
        "name": "'"$name"'",
        "email": "'"$email"'"
    }'
}

# Add 20 users with random details
for ((i=1; i<=20; i++)); do
    username=$(generate_username)
    name=$(generate_name)
    email=$(generate_email)
    add_user "$((i + 24))" "$username" "$name" "$email"
done
