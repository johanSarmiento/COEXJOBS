-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 12-12-2022 a las 23:36:36
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `LOGIN`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TBLROLES`
--

CREATE TABLE `TBLROLES` (
  `rol_id` int(11) NOT NULL DEFAULT 5,
  `rol_nom` varchar(20) NOT NULL,
  `rol_des` varchar(100) DEFAULT NULL,
  `rol_est` tinyint(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TBLUSERS`
--

CREATE TABLE `TBLUSERS` (
  `use_id` int(11) NOT NULL,
  `use_rol_id` int(11) NOT NULL,
  `use_fir_nam` varchar(20) NOT NULL,
  `use_las_nam` varchar(20) NOT NULL,
  `use_use_nam` varchar(14) NOT NULL,
  `use_pas` varchar(14) NOT NULL,
  `use_ema` varchar(20) NOT NULL,
  `use_est` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `TBLROLES`
--
ALTER TABLE `TBLROLES`
  ADD PRIMARY KEY (`rol_id`);

--
-- Indices de la tabla `TBLUSERS`
--
ALTER TABLE `TBLUSERS`
  ADD PRIMARY KEY (`use_id`),
  ADD KEY `use_rol_id` (`use_rol_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `TBLUSERS`
--
ALTER TABLE `TBLUSERS`
  MODIFY `use_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `TBLUSERS`
--
ALTER TABLE `TBLUSERS`
  ADD CONSTRAINT `TBLUSERS_ibfk_1` FOREIGN KEY (`use_rol_id`) REFERENCES `TBLROLES` (`rol_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
