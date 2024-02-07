import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <div class="navbar bg-base-100">
  <div class="navbar-start">

    <Link class="btn btn-ghost text-xl text-white" to={"/"}>Spring Boot CRUD</Link>
  </div>

  <div class="navbar-end">
    <Link class="btn btn-ghost text-xl text-white" to={"/adduser"}>Add User</Link>


  </div>
</div>
    )
}