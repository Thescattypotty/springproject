.PHONY : backend frontend

frontend:
	@$(MAKE) -C frontend

backend:
	@$(MAKE) -C backend

clean:
	@$(MAKE) -C frontend clean
	@$(MAKE) -C backend clean
