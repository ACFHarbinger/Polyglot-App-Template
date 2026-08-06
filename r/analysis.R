# r/analysis.R
# Premium R data analysis example using standard datasets and basic stats.

# Load libraries (install if missing)
required_packages <- c("ggplot2", "dplyr")
for (pkg in required_packages) {
  if (!require(pkg, character.only = TRUE, quietly = TRUE)) {
    install.packages(pkg, repos = "https://cloud.r-project.org")
    library(pkg, character.only = TRUE)
  }
}

cat("--- Running Polyglot App R Data Analysis ---\n")

# Use the built-in mtcars dataset
data(mtcars)

# 1. Summary Statistics by Transmission Type (am: 0 = automatic, 1 = manual)
car_summary <- mtcars %>%
  group_by(Transmission = as.factor(am)) %>%
  summarise(
    Count = n(),
    Mean_MPG = mean(mpg, na.rm = TRUE),
    SD_MPG = sd(mpg, na.rm = TRUE),
    Mean_HP = mean(hp, na.rm = TRUE)
  )

print(car_summary)

# 2. Fit a simple linear regression model: Miles Per Gallon based on Weight and Horsepower
fit <- lm(mpg ~ wt + hp, data = mtcars)
summary_fit <- summary(fit)
print(summary_fit)

# 3. Create a premium plot using ggplot2
plot_out <- ggplot(mtcars, aes(x = wt, y = mpg, color = as.factor(cyl))) +
  geom_point(size = 3, alpha = 0.8) +
  geom_smooth(method = "lm", se = FALSE, size = 1.2) +
  theme_minimal() +
  labs(
    title = "Miles Per Gallon vs. Car Weight",
    subtitle = "Fitted line by cylinder count group",
    x = "Weight (1000 lbs)",
    y = "Miles Per Gallon (MPG)",
    color = "Cylinders"
  ) +
  theme(
    text = element_text(family = "sans"),
    plot.title = element_text(face = "bold", size = 14),
    legend.position = "bottom"
  )

# Save plot to current directory
ggsave("mpg_weight_analysis.png", plot = plot_out, width = 7, height = 5, dpi = 300)
cat("Analysis finished! Saved mpg_weight_analysis.png to current directory.\n")
