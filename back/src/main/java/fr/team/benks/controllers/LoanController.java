package fr.team.benks.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import fr.team.benks.services.CalculService;

@RestController
public class LoanController {

	@Autowired
	private CalculService calculService;
}
