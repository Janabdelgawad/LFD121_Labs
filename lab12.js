@Controller
public class WebController implements WebMvcConfigurer {

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/results").setViewName("results");
    }

    @GetMapping("/")
    public String showForm(PersonForm personForm) {
        return "form";
    }

    @PostMapping("/")
    public String checkPersonInfo(@Valid PersonForm personForm,
                                  BindingResult bindingResult) {
 if(bindingResult.hasErrors())
{ return "form";}



        return "redirect:/results";
    }
}

// If you use a textarea:
